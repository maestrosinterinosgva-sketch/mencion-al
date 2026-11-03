import os
import shutil
import sqlite3

local_app_data = os.environ.get("LOCALAPPDATA", "")
h_path = os.path.join(local_app_data, "Google", "Chrome", "User Data", "Default", "History")
temp_history = os.path.join(os.environ.get("TEMP", "."), "chrome_hist_collab.sqlite")

shutil.copy2(h_path, temp_history)
con = sqlite3.connect(temp_history)
cur = con.cursor()
cur.execute("""
    SELECT url, title, datetime(last_visit_time/1000000-11644473600, 'unixepoch')
    FROM urls
    WHERE url LIKE '%bbcollab%' OR url LIKE '%recording%' OR url LIKE '%playback%'
    ORDER BY last_visit_time DESC
    LIMIT 100
""")
rows = cur.fetchall()
con.close()
if os.path.exists(temp_history):
    os.remove(temp_history)

print(f"Total matching URLs: {len(rows)}")
for r in rows:
    print(f"{r[2]} | {r[1]} | {r[0]}")
