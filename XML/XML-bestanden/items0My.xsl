<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<!--Een XML bestand met CD- en boekdata -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="html"/>


<xsl:template match="/items">
<h2>CD Overzicht :</h2>
<table>
<tr><th>Omschrijving</th><th>Prijs</th></tr>

<xsl:for-each select="item">
<xsl:sort select="omschrijving"/>
<xsl:if test ="categorie='CD'">

<tr>
<td><xsl:apply-templates select="omschrijving" /></td>
<td><xsl:apply-templates select="prijs" /></td>
</tr>
</xsl:if>
</xsl:for-each>

</table>
</xsl:template>

<xsl:template match="omschrijving">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>

<xsl:template match="prijs">
<xsl:value-of select="."></xsl:value-of>
</xsl:template>



</xsl:stylesheet>