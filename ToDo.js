function handleValue(){
    console.log('Here I am!');
    var getValue = document.getElementById('textField');
    var myValue = getValue.value;
    console.log('Value is ', myValue);
    if(myValue == "")
    {
        console.log('Value nai!!!');
        document.getElementById('pTagValue').innerHTML = 'Please enter a value!!!';
    }
    else
    {
        document.getElementById('pTagValue').innerHTML = myValue;
        let actList = document.getElementById("activityList");
        let list = document.createElement('li');
        list.textContent = myValue;
        actList.appendChild.list;

       


    }
    console.log('Getting out from here!',myValue);

}