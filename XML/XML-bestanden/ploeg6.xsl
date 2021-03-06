<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="html"/>

<xsl:template match="/ploeg">
<h2>Spelers van ploeg <xsl:value-of select="@naam"></xsl:value-of>:</h2>
<table>
<tr><th>naam</th><th>nummer</th><th>aantal doelpunten</th></tr>

<xsl:for-each select="speler">
<xsl:sort select="naam"/><!-- soort op naam-->
<xsl:if test="aantal-doelpunten&gt;2">  <!--   if test =" uitdrukking voor controle "    -->
<!-- if-voorwaarde voor controle: grotere dan 2 alleen.    -->
<tr>
<td><xsl:apply-templates select="naam" /></td>
<td><xsl:apply-templates select="nummer" /></td>
<td><xsl:apply-templates select="aantal-doelpunten" /></td>
</tr>
</xsl:if>
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


