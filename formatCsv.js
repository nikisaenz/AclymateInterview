function formatCsv(rawData) {
    //create template from headings
    var template = [];
    for (let i = 0; i < rawData[0].length; i++) {
        template.push(rawData[0][i]);
    }

    //create and add to the formatted data array
    let formattedData = [];
    for (let i = 1; i < rawData.length; i++) {
        //create a new object
        let data = {};
        for (let j = 0; j < template.length; j++) {
            data[template[j]] = rawData[i][j];
        }
        //add to array
        formattedData.push(data);
    }

    // console.log(formattedData);
    return formattedData;
}