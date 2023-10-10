/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cdh7yxf8eki8fie",
    "created": "2023-10-10 04:01:16.531Z",
    "updated": "2023-10-10 04:01:16.531Z",
    "name": "Fireship",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "ipw1hrxj",
        "name": "title",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cdh7yxf8eki8fie");

  return dao.deleteCollection(collection);
})
