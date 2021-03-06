<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
<xsl:output method="html"/>
<xsl:template match="/ploeg">
<h2>Spelers van ploeg <xsl:value-of select="@naam"></xsl:value-of>:</h2>
<table>
<tr><th>naam</th><th>nummer</th><th>aantal doelpunten</th></tr>

<xsl:for-each select="speler">
<!-- sorteren op naam(alfabetisch):-->
<xsl:sort select="naam" /> 
<!-- sorteren op nummers dalend:-->
<xsl:sort select="aantal-doelpunten" data-type="number" order="descending"/>

<tr>
<td><xsl:apply-templates select="naam" /></td>
<td><xsl:apply-templates select="nummer" /></td>
<td><xsl:apply-templates select="aantal-doelpunten" /></td>
</tr>
</xsl:for-each>

</table>
</xsl:template>

<xsl:template match="naam">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="nummer">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="aantal-doelpunten">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

</xsl:stylesheet>


