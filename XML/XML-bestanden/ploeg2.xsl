<?xml version="1.0"?>
<!-- toon alle ploegleden -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html"/> <!--geeft welke bestand maken we als resultaat -->

<xsl:template match="/ploeg">  <!-- roetElement ploeg krijgt een template :  -->
    <h2>Spelers van ploeg <xsl:value-of select="@naam"></xsl:value-of>:</h2> <!-- waarde van att naam  -->
    <table>  <!-- alle gegevens in tabel met header -->
    <tr><th>naam</th><th>nummer</th><th>aantal doelpunten</th></tr> 
    <xsl:apply-templates select="speler" />  <!-- oproep van de functie template door apply-template met template voor speler -->
    </table>
</xsl:template>

<xsl:template match="speler"> <!--template voor 1 speler--><!-- of zo:  <xsl:for-each select="speler">--> 
<tr>
<td><xsl:apply-templates select="naam" /></td>  <!-- ga naar template voor naam -->
<td><xsl:apply-templates select="nummer" /></td><!-- ga naar template voor nummer -->
<td><xsl:apply-templates select="aantal-doelpunten" /></td><!-- ga naar template voor aantal-doelpunten -->
</tr>
</xsl:template>

<xsl:template match="naam"><!-- template voor naam -->
<xsl:value-of select="."></xsl:value-of>  <!--  "." neemt de waarde van tag naam.nl wat binnen de tag naam staat-->
</xsl:template>

<xsl:template match="nummer"><!-- template voor nummer -->
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="aantal-doelpunten"><!-- template voor aantak-doelpunten -->
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

</xsl:stylesheet>


