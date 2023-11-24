const inspect = require('util').inspect;
const md = require('markdown-it')({
  html: true
});

function findChild(arr, target) {
  for (const obj of arr) {
    if (obj.url === target) {
      return true
    }

    if (obj.items) {
      if (obj.items.some(item => item.url === target)) {
        return true;
      } else {
        const result = findChild(obj.items, target);

        if (result) {
          return true
        }
      }
    }
  }

  return false;
};

module.exports = (config) => {
  config.addShortcode('debug', (content, depth = 0) => `<pre>${inspect(content, { depth })}</pre>`);

  config.addShortcode('youtube', (id) => `<div class="video"><div class="video-container"><iframe width="640" height="360" src="https://www.youtube.com/embed/${id}" frameborder="0" allowfullscreen></iframe></div></div>`);

  config.addPairedShortcode('snippet', (content, icon) => {
    let className = '';

    if (icon && /(?<=\bfill=')[^']*/.test(icon)) {
      switch (/(?<=\bfill=')[^']*/.exec(icon)[0]) {
        case '#f5af23':
            className = 'caution';
          break;
        case '#f20000':
          className = 'warning';
          break;
        case '#0068c3':
          className = 'info';
          break;
        case '#6ab934':
          className = 'notice';
          break;
      }
    }

    return `<div class="snippet ${className}">${icon ?? ''}<div>${md.render(content).replace(/\n/g, '')}</div></div>`;
  });

  config.addShortcode('sidebarItem', function(item, contents) {
    const env = this.ctx.environments ?? this.ctx;
    const page = this.page;
    const icons = env.icons;
    const pageUrlNoLang = page.url ? page.url.replace(/^\/(?!kb)[a-zA-Z]{2}\//, '/') : '';

    function sidebarItem(itm, index) {
      const url = itm.url ? env.lang !== 'en' ? `/${env.lang}${itm.url}` : itm.url : null;
      const label = env.locale[env.lang].label[itm.label] ? env.locale[env.lang].label[itm.label] : itm.label;
      const itemData = url ? contents.find((content) => content.url === url) : null;
      const isActive = itm.items?.length > 0 && findChild(itm.items, pageUrlNoLang) ? 'active' : '';

      return `<div class"nav-item-container">
        <div class="nav-item-sub-container">
          ${url ?
            `<a class="nav-item level-${index} ${isActive} ${page.url === url ? 'active current' : ''}" href="${url}" data-dwd-tab data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? item.label}">
              ${itemData?.data.title ?? label}
            </a>` :
            `<span class="nav-item level-${index} ${isActive}" data-dwd-tab data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
              ${itemData?.data.title ?? label}
            </span>`
          }
          ${itm.items?.length > 0 ? (
            `<div class="expand-more ${isActive} ${page.url === url ? 'active' : ''}" data-dwd-tab data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
              ${icons.expandMore}
            </div>`) :
            ''
          }
        </div>
        ${itm.items?.length > 0 ? (
          `<div class="nav-item-items ${isActive} ${page.url === url ? 'active' : ''}" data-dwd-tab-group="${url ?? label}" data-dwd-tab-target="${url ?? label}">
            ${itm.items.map((subItem) => sidebarItem(subItem, index + 1)).join('')}
          </div>`) :
          ''
        }
      </div>`;
    }

    return sidebarItem(item, 1);
  });
}