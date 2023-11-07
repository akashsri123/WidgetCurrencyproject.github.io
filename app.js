function fetchCoinGeckoTokenData(tokenName) {
    
    const apiUrl = `https://api.coingecko.com/api/v3/coins/${tokenName}`;


    $.get(apiUrl, function (data) {
        
          const eleimg=document.getElementById("imageid")
          eleimg.src=data.image.small
          const ele1=document.getElementById("nameof")
          ele1.textContent=data.name+'('+data.symbol.toUpperCase()+')';
          const ele2=document.getElementById("rankh1");
          ele2.textContent= data.market_cap_rank;
          const ele3=document.getElementById("volume");
          ele3.textContent='$  '+data.market_data.total_volume.usd+" USD";
          const ele4=document.getElementById("market");
          ele4.textContent='$  '+data.market_data.market_cap.usd+' USD' 
    });
}

function callfunc(){
    
    const name=document.getElementById("manyoptions")
    const val=name.value;
   
if (val) {
    fetchCoinGeckoTokenData(val);
} else {
    console.error("Please provide a token name in the script tag's data-token attribute.");
}
}
