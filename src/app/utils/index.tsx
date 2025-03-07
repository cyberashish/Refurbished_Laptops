const formatNumber = (num:number) => {
    return new Intl.NumberFormat("en-IN").format(num);
  };

   function formatTimestampToDate(isoString: string): string {
    const date = new Date(isoString);
    
    const day = date.getDate().toString().padStart(2, "0");
    const month = date.toLocaleString("en-US", { month: "long" }); // Full month name
    const year = date.getFullYear();
  
    return `${day} ${month} ${year}`;
  }
  

export {formatNumber,formatTimestampToDate}