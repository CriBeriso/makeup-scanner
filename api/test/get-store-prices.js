const xhr = new XMLHttpRequest

xhr.addEventListener('load', () => {
  console.log(xhr.status, xhr.response)
})

xhr.open('GET', 'http://localhost:8080/products/675b1792fecb1169d57f5c5d/storePrices')
xhr.setRequestHeader('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NzViMTc5MmZlY2IxMTY5ZDU3ZjViZWMiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3MzQwMjY0ODUsImV4cCI6MTczNDAzMDA4NX0.FxrgCNcWognaOi2b5XDurrnYDMyheWwYsmPj5dX1NqI')
xhr.send()