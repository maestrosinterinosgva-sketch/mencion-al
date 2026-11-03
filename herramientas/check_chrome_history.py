import os
import shutil
import sqlite3

local_app_data = os.environ.get("LOCALAPPDATA", "")
chrome_user_data = os.path.join(local_app_data, "Google", "Chrome", "User Data")

history_files = []
# Check Default and Profile *
if os.path.exists(chrome_user_data):
    for item in os.listdir(chrome_user_data):
        h = os.path.join(chrome_user_data, item, "History")
        if os.path.exists(h):
            history_files.append((item, h))

temp_history = os.path.join(os.environ.get("TEMP", "."), "chrome_hist_copy.sqlite")

found_urls = []
for profile_name, h_path in history_files:
    try:
        shutil.copy2(h_path, temp_history)
        con = sqlite3.connect(temp_history)
        cur = con.cursor()
        cur.execute("""
            SELECT url, title, datetime(last_visit_time/1000000-11644473600, 'unixepoch')
            FROM urls
            WHERE url LIKE '%ucjc%' OR url LIKE '%blackboard%' OR url LIKE '%collaborate%' OR url LIKE '%bbcollab%'
            ORDER BY last_visit_time DESC
            LIMIT 40
        """)
        rows = cur.fetchall()
        for r in rows:
            found_urls.append((profile_name, r[2], r[1], r[0]))
        con.close()
    except Exception as e:
        print(f"Error reading {profile_name}: {e}")

if os.path.exists(temp_history):
    os.remove(temp_history)

print(f"Total matching URLs found: {len(found_urls)}")
for p, ts, title, url in found_urls[:25]:
    print(f"[{p}] {ts} | {title} | {url}")
