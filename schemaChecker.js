function schemaChecker(body, schema) {
    Object.keys(schema).forEach(key => {
        //check if required
        if (schema[key].required == true) {
            if (!body[key]) {
                //required & doesn't exist: false
                //console.log("false");
                return false;
                //check matching types
            } else {
                if (typeof body[key] !== schema[key].type) {
                    //required & mismatched types: false
                    //console.log("false");
                    return false;
                }
            }

        //not required, check type
        } else {
            if (body[key]){
                if (typeof body[key] !== schema[key].type) {
                    //not required but exists & mismatched types: false
                    //console.log("false");
                    return false
                }
            }
        }

        //recursive check to see if there are more nested objects
        if (schema[key].type == "object") {
            schemaChecker(body[key], schema[key]);
        }

        return true;
    });


}

