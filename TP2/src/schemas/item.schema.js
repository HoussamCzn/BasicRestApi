module.exports = {
    "title": "item",
    "description": "Représente un film ou une série",
    "type": "object",
    "properties": {
        "title": {
            "type": "string"
        },
        "genre": {
            "type": "string"
        },
        "language": {
            "type": "string"
        },
        "duration": {
            "type": "string"
        },
        "imdbId": {
            "type": "string"
        },
        "id": {
            "type": "string",
            "format": "uuid"
        }
    },
    "required": ["title", "genre", "language", "duration", "imdbId", "id"],
    "additionalProperties": false
}