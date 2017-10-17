
export function recomposedArray(operations) {
    let temp = {};

    operations.forEach(item => {
        if (temp[item.date]) {
            temp[item.date]['operations'].push(item);
            temp[item.date]['links'] = temp[item.date]['links'].concat(item.links);
        } else {
            temp[item.date] = {
                operations: [item],
                links: item.links
            };
        }
    });

    // let result = Object.keys(temp).sort((a, b) => a < b).reduce((result, item) => {
    //     result[item] = temp[item];
    //     return result;
    // }, {});
    return temp;
//    console.log(JSON.stringify(result, null, 4));
}
