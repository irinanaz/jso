<?xml version="1.0" encoding="utf-8" standalone="yes" ?>
<!--Een XML bestand met CD- en boekdata -->
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">

<xsl:output method="text"  indent="yes"/>


<xsl:template match="/opleiding">
Overzicht deelnemers van opleiding <xsl:value-of select="titel"></xsl:value-of>:<xsl:text>&#xA;</xsl:text>

<xsl:for-each select="deelnemers">




<xsl:apply-templates select="deelnemer" /><xsl:text>&#xA;</xsl:text>


</xsl:for-each>
</xsl:template>

<xsl:template match="deelnemer">
<xsl:value-of select="."></xsl:value-of><xsl:text>&#xA;</xsl:text>
</xsl:template>

</xsl:stylesheet>