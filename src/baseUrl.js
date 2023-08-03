let baseUrl = '';
if(process.env.NODE_ENV.PORT === "production"){
      baseUrl = "https://school-management-app.onrender.com"
}
else{
      baseUrl = 'http://localhost:4000'
}
export {baseUrl};