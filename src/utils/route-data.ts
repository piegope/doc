export interface RouteData {
  headings: any;
  hasSidebar: boolean;
  toc: { items: any } | undefined;
}

export function generateRouteData({
  props,
  url
}: {
  props: any
  url: URL;
}): RouteData {
  const { entry, locale } = props;

  console.log('here', props);

  return {
    ...props
  }
}