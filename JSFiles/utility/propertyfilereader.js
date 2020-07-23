"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertiesFileReader = void 0;
var PropertiesReader = require('properties-reader');
class PropertiesFileReader {
    constructor(filePath) {
        this.properties = PropertiesReader(filePath);
    }
    propertiesFileData(keyValue) {
        var propertyValue = this.properties.get(keyValue);
        return propertyValue.toString();
    }
}
exports.PropertiesFileReader = PropertiesFileReader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvcGVydHlmaWxlcmVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdXRpbGl0eS9wcm9wZXJ0eWZpbGVyZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsSUFBSSxnQkFBZ0IsR0FBRyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztBQUVwRCxNQUFhLG9CQUFvQjtJQUc3QixZQUFZLFFBQWdCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUE7SUFDaEQsQ0FBQztJQUNELGtCQUFrQixDQUFDLFFBQWdCO1FBQy9CLElBQUksYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ3RDLENBQUM7Q0FFRDtBQVhELG9EQVdDIn0=