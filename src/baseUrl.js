let baseUrl = ''
if(process.env.NODE_ENV.PORT === "production"){
      // baseUrl = 
}
else{
      baseUrl = 'http://localhost:4000'
}
export {baseUrl};