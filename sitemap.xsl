<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes" />

  <xsl:template match="/">
    <html lang="id">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sitemap - Padjajaran Jaya</title>
        <style>
          body {
            margin: 0;
            font-family: Arial, sans-serif;
            background: #f6f8fb;
            color: #2d3640;
          }
          .wrap {
            max-width: 980px;
            margin: 32px auto;
            padding: 0 16px;
          }
          .card {
            background: #ffffff;
            border: 1px solid #dfe5ed;
            border-radius: 12px;
            overflow: hidden;
          }
          .head {
            padding: 18px 20px;
            border-bottom: 1px solid #e9eef5;
          }
          h1 {
            margin: 0;
            font-size: 24px;
          }
          p {
            margin: 8px 0 0;
            color: #5a6572;
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          th,
          td {
            padding: 12px 14px;
            border-bottom: 1px solid #eef2f7;
            text-align: left;
            font-size: 14px;
          }
          th {
            background: #f9fbff;
            color: #415063;
          }
          tr:last-child td {
            border-bottom: 0;
          }
          a {
            color: #007bff;
            text-decoration: none;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="wrap">
          <div class="card">
            <div class="head">
              <h1>Sitemap Padjajaran Jaya</h1>
              <p>Daftar URL yang terdaftar untuk pengindeksan mesin pencari.</p>
            </div>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Last Modified</th>
                  <th>Change Frequency</th>
                  <th>Priority</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td>
                      <a href="{s:loc}">
                        <xsl:value-of select="s:loc" />
                      </a>
                    </td>
                    <td><xsl:value-of select="s:lastmod" /></td>
                    <td><xsl:value-of select="s:changefreq" /></td>
                    <td><xsl:value-of select="s:priority" /></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
