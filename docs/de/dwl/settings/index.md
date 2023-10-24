---
eleventyComputed:
  title: Einstellungen
  order: 20
---
Die Einstellungen von {{ de.DWL }} sind über die Schaltfläche ***Einstellungen*** in der Oberfläche der Browser-Erweiterung verfügbar, unabhängig davon, welche Devolutions-Anwendung Sie zusammen mit {{ de.DWL }} verwenden.  

![{{ de.DWL }} Einstellungen](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl2000.png)  

Die ***Einstellungen*** sind in zwei Kategorien unterteilt: <a href="#configuration">***Konfiguration***</a> und <a href="#source">***Datenquellen***</a>.

![{{ de.DWL }} Einstellungen](https://webdevolutions.azureedge.net/docs/de/dwl/Dwl4027.png)

### Konfiguration <a name="configuration"></a>

Die ***Allgemeinen*** Einstellungen betreffen die Benutzeroberfläche und die Interaktion.  

* Registerkarte ***Allgemein***  
	* {{ de.DWL }} Symbol in Felder für Anmeldeinformationen anzeigen.  
	* Aufforderung zum Speichern der Anmeldedaten bei einer neuen Anmeldung anzeigen.  
	* Optionen des Kontexmenü anzeigen.  
	* Felder einfärben, wenn {{ de.DWL }} diese befüllt.  
	* ***Farbschema*** der Anwendung festlegen.  

* Registerkarte ***Erweitert***  
	* Telemetrie deaktivieren.  
	* Beta-Versionen von {{ de.DWL }} aktivieren.  

Die ***Ausnahmen*** ermöglichen eine Liste von Websites zu hinterlegen, bei denen der Benutzer keine Benachrichtigung erhält, die eingegebenen Anmeldeinformationen zu speichern.  

* Die möglichen Optionen lauten: ***Diese Seite nicht hinzufügen***, ***Nie Automatisch ausfüllen***, ***Nie etwas durchführen*** und ***Keine Symbole in Felder anzeigen***.  
* Diese Einstellungen lassen sich für ***Basisdomäne***, ***Host***, ***Beginnt mit***, ***RegEx***, und ***Exakt***e Werte konfigurieren.  

Die ***Import- / Export- Einstellungen*** ermöglichen das Speichern und Übertragen der aktuellen Einstellungen.  

* Einstellungen von anderen Browsern oder Benutzern importieren. 
* Auswählen, ob die ***Einstellungen*** für {{ de.DWL }}, ***Passwort Generator***  und ***Ausnahmen*** exportiert werden sollen.  

### Datenquellen <a name="source"></a>

Die Einstellungen für ***Datenquellen*** dienen der Anpassung der Interaktionen von {{ de.DWL }} mit <a href="#rdm">{{ de.RDM }}</a>, <a href="#server">{{ de.DVLS }}</a>, <a href="#hub">{{ de.DHUBB }} und {{ de.DHUBP }}</a>. 

### {{ de.RDM }} <a name="rdm"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.RDM }} aktivieren 
		</td>
		<td>
Einträgen aus {{ de.RDM }} abrufen, wenn die Anwendung geöffnet ist. 
		</td>
	</tr>
	<tr>
		<td>
Standardport verwenden (19443) 
		</td>
		<td>
Port für die Kommunikation zwischen {{ de.RDM }} und {{ de.DWL }}. 
		</td>
	</tr>
	<tr>
		<td>
Einträge standardmäßig im {{ de.UVLT }}  hinzufügen  
		</td>
		<td>
Neue Einträge werden standardmäßig im {{ de.UVLT }} gespeichert. 
		</td>
	</tr>
	<tr>
		<td>
Zielordner 
		</td>
		<td>
Ordner auswählen, in dem die Anmeldeinformationen gespeichert werden. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Anmeldeinformationen beim Laden automatisch abrufen
		</td>
		<td>
{{ de.DWL }} sucht automatisch nach Anmeldeinformationen in der Datenquelle, wenn eine Verbindung zu einer Website hergestellt wird.
<br>

Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. 
		</td>
	</tr>
	<tr>
		<td>
Anmeldeinformationen beim Laden automatisch ausfüllen
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Formular nach dem Ausfüllen automatisch absenden
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE ERWEITERT 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Anwendungsschlüssel 
		</td>
		<td>
Sichert die Kommunikation zwischen {{ de.RDM }} und {{ de.DWL }} zusätzlich mittels einem Anwendungsschlüssel.<br>

Gehen Sie in {{ de.RDM }} zu <b><i>Datei – Optionen – Browsererweiterungen</b></i>, um den Anwendungsschlüssel festzulegen. 
		</td>
	</tr>
	<tr>
		<td>
Nativen Nachrichtenaustausch aktivieren 
		</td>
		<td>
Tauschen Sie Nachrichten mit einer nativen Anwendung aus, die auf dem Computer des Benutzers installiert ist. 
		</td>
	</tr>
	<tr>
		<td>
Alte API verwenden 
		</td>
		<td>
Für die Kompatibilität mit älteren Versionen von {{ de.RDM }}. 
		</td>
	</tr>
</table>

### {{ de.DVLS }} <a name="server"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DVLS }} aktivieren 
		</td>
		<td>
Einträge von {{ de.DVLS }} abrufen. 
		</td>
	</tr>
	<tr>
		<td>
Zielordner 
		</td>
		<td>
Ordner auswählen, in dem die Anmeldeinformationen im {{ de.VLT }} gespeichert werden. 
		</td>
	</tr>
	<tr>
		<td>
Server URL 
		</td>
		<td>
URL der {{ de.DVLS}} Instanz. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Anmeldeinformationen beim Laden automatisch abrufen
		</td>
		<td>
{{ de.DWL }} sucht automatisch nach Anmeldeinformationen in der Datenquelle, wenn eine Verbindung zu einer Website hergestellt wird.
<br>

Falls deaktiviert, klicken Sie auf das Symbol der Erweiterung {{ de.DWL }}, um die Anmeldeinformationen manuell abzurufen. 
		</td>
	</tr>
	<tr>
		<td>
Anmeldeinformationen beim Laden automatisch ausfüllen
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Formular nach dem Ausfüllen automatisch absenden
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE ERWEITERT 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Standard Vergleich 
		</td>
		<td>
Legen Sie einen Standard-Vergleichstyp fest zwischen <b><i>Basisdomäne</b></i>, <b><i>Host</b></i>,
<b><i>Beginnt mit</b></i>, <b><i>RegEx</b></i>, <b><i>Exakt</b></i> und <b><i>Niemals</b></i>. 
		</td>
	</tr>
	<tr>
		<td>
Alle verfügbaren {{ de.VLT }}e synchronisieren 
		</td>
		<td>
Synchronisiert alle verfügbaren {{ de.VLT }}e von {{ de.DVLS }}. 
		</td>
	</tr>
</table>

### {{ de.DHUBB }} und {{ de.DHUBP }} <a name="hub"></a>

<table>
	<tr>
		<th>
REGISTERKARTE ALLGEMEIN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DHUBB }} / Personal aktivieren 
		</td>
		<td>
Einträge von {{ de.DHUB }} abrufen. 
		</td>
	</tr>
	<tr>
		<td>
Server URL (nur mit {{ de.DHUBB }} verfügbar) 
		</td>
		<td>
URL der {{ de.DHUBB }}-Instanz. 
 
		</td>
	</tr>
	<tr>
		<td>
Benutzername 
		</td>
		<td>
Geben Sie einen Benutzernamen ein, um sich mit dem Hub zu verbinden. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE AKTIONEN 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
Anmeldeinformationen beim Laden automatisch ausfüllen
		</td>
		<td>
Füllt beim Laden der Website automatisch die Anmeldeinformationen aus. 
		</td>
	</tr>
	<tr>
		<td>
Formular nach dem Ausfüllen automatisch absenden
		</td>
		<td>
Übermittelt automatisch die Anmeldeinformationen, wenn die Felder ausgefüllt sind. 
		</td>
	</tr>
</table>

<table>
	<tr>
		<th>
REGISTERKARTE ERWEITERT 
		</th>
		<th>
BESCHREIBUNG 
		</th>
	</tr>
	<tr>
		<td>
{{ de.DA }} Anmeldung 
		</td>
		<td>
Legen Sie die Anmelde-URL Ihres {{ de.DA }} fest. 
		</td>
	</tr>
	<tr>
		<td>
Favicon anzeigen 
		</td>
		<td>
Zeigt das Favicon von {{ de.DWL }} an. 
		</td>
	</tr>
	<tr>
		<td>
{{ de.DWL }} 
		</td>
		<td>
Aktiviert {{ de.DWL}} mit {{ de.DHUB }}. 
		</td>
	</tr>
	<tr>
		<td>
Standard Vergleich 
		</td>
		<td>
Legen Sie einen Standard-Vergleichstyp fest zwischen <b><i>Basisdomäne</b></i>, <b><i>Host</b></i>,
<b><i>Beginnt mit</b></i>, <b><i>RegEx</b></i>, <b><i>Exakt</b></i> und <b><i>Niemals</b></i>. 
		</td>
	</tr>
	<tr>
		<td>
Alle verfügbaren {{ de.VLT }}e synchronisieren (nur mit {{ de.DHUBB }} verfügbar) 
		</td>
		<td>
Synchronisiert alle verfügbaren {{ de.VLT }}e von {{ de.DHUBB }}. 
		</td>
	</tr>
</table>
