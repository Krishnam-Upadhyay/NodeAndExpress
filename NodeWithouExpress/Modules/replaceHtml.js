module.exports = function fileReplace(Template,pr){
    console.log(pr);
    let ouput = Template.replace("{image}",pr.productImage);
    ouput= ouput.replace("{NAME}",pr.name);
    ouput = ouput.replace("{MODELNAME}",pr.modeName);
    ouput = ouput.replace("{MODELNUMBER}",pr.modelNumber);
    ouput = ouput.replace("{SIZE}",pr.size);
    ouput = ouput.replace("{CAMERA}",pr.camera);
    ouput = ouput.replace("{PRICE}",pr.price);
    ouput = ouput.replace("{COLOR}",pr.color);
    ouput = ouput.replace("{ID}",pr.id);
    ouput = ouput.replace("{ROM}",pr.ROM);
    ouput = ouput.replace("{DESC}",pr.Description);
    
    return ouput;
}