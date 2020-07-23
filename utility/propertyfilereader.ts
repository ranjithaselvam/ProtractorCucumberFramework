var PropertiesReader = require('properties-reader');

export class PropertiesFileReader {
/**Property file reader */
    properties: any;
    constructor(filePath: string) {
        this.properties = PropertiesReader(filePath)
    }
    propertiesFileData(keyValue: string): string {
        var propertyValue = this.properties.get(keyValue);
        return propertyValue.toString()
 }

}