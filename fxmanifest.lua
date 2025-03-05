fx_version "cerulean"

description "Basic React (TypeScript) With ShadCN & Lua Game Scripts Boilerplate"
author "Livino Dev"
version '1.0.0'
repository 'https://github.com/jeanlivino'

lua54 'yes'

games {"gta5", "rdr3"}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {'web/build/index.html', 'web/build/**/*'}
