let data = {
 "list": [
   {"name":"my Name","id":12,"type":"car owner"},
   {"name":"my Name2","id":13,"type":"car owner2"},
   {"name":"my Name4","id":14,"type":"car owner3"},
   {"name":"my Name4","id":15,"type":"car owner5"}
]}

to get single object
data.list.find( record => record.name === "my Name")

to get single array object
data.list.filter( record => record.name === "my Name")
