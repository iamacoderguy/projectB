define({ "api": [
  {
    "type": "get",
    "url": "/",
    "title": "1. welcome page",
    "group": "A_client",
    "permission": [
      {
        "name": "none"
      }
    ],
    "description": "<p>It will return a welcome message</p>",
    "success": {
      "fields": {
        "Success": [
          {
            "group": "Success",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>200</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/client.js",
    "groupTitle": "A_client",
    "name": "Get"
  }
] });
