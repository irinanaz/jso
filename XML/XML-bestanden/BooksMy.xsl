<?xml version="1.0"?>
<xsl:stylesheet 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="html"/>
    <xsl:template match="/bookstore">
        <h2> Bookstore :</h2>
        <table>
            <tr>
                <th>Title</th>
                <th>Author</th>
                <th>ISBN</th>
                <th>prijs</th>
            </tr>
            <xsl:for-each select="book">
                <xsl:sort select="price" data-type="number" order="ascending"/>
                <tr>
                    <td>
                        <xsl:apply-templates select="title" />
                    </td>
                    <td>
                        <xsl:apply-templates select="author" />
                    </td>
                    <td>
                        <xsl:apply-templates select="@ISBN" />
                    </td>
                    <td>
                        <xsl:apply-templates select="price" />
                    </td>
                </tr>
            </xsl:for-each>
        </table>
    </xsl:template>
    <xsl:template match="title">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
    <xsl:template match="author">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
    <xsl:template match="@ISBN">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
    <xsl:template match="price">
        <xsl:value-of select="."></xsl:value-of>
    </xsl:template>
</xsl:stylesheet>


