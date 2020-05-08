
var home = document.getElementsByTagName('button')[1]
var livestream = document.getElementsByTagName('button')[2]
var donation = document.getElementsByTagName('button')[4]
var sendYourTestimony = document.getElementsByTagName('button')[6]
var themandate = document.getElementsByTagName('button')[7]
var activities = document.getElementsByTagName('button')[8]
var themeofthemonth = document.getElementsByTagName('button')[9]
var themeoftheyear = document.getElementsByTagName('button')[10]
var prayerrequest = document.getElementsByTagName('button')[11]
var churchMinistries = document.getElementsByTagName('button')[12]
var events = document.getElementsByTagName('button')[13]
var gallery = document.getElementsByTagName('button')[14]
var address = document.getElementsByTagName('button')[15]
var homediv = document.getElementById('home')
var livestreamdiv = document.getElementById("livestream-live")
var givediv = document.getElementById('partnership')
var sendTestimonydiv = document.getElementById('sendTestimony')
var themandatediv =document.getElementById('themandate')
var activitiesdiv = document.getElementById('activities')
var themeofthemonthdiv = document.getElementById('themeofthemonth')
var themeoftheyeardiv = document.getElementById('themeoftheyear')
var prayerrequestdiv = document.getElementById('prayerrequest')
var churchMinistriesdiv = document.getElementById('churchMinistries')
var eventsdiv = document.getElementById('events')
var gallerydiv = document.getElementById('gallery')
var addressdiv = document.getElementById('address')

if( navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i)|| navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/BlackBerry/i)|| navigator.userAgent.match(/Windows Phone/i)){

}else{
  location.replace("/")
}
home.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "block"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
livestream.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "block"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
donation.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "block"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
sendYourTestimony.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "block"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
activities.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "block"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
themeofthemonth.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "block"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
themeoftheyear.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "block"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
prayerrequest.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "block"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
churchMinistries.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "block"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
themandate.addEventListener("click", () => {
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  themandatediv.style.display = "block"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
events.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  themandatediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "block"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "none"
})
gallery.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  gallerydiv.style.display = "block"
  addressdiv.style.display = "none"
})
address.addEventListener("click", () => {
  themandatediv.style.display = "none"
  homediv.style.display = "none"
  livestreamdiv.style.display = "none"
  givediv.style.display = "none"
  sendTestimonydiv.style.display = "none"
  activitiesdiv.style.display = "none"
  themeofthemonthdiv.style.display = "none"
  themeoftheyeardiv.style.display = "none"
  prayerrequestdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  churchMinistriesdiv.style.display = "none"
  eventsdiv.style.display = "none"
  gallerydiv.style.display = "none"
  addressdiv.style.display = "block"
})
var giveButton = document.getElementById("giveButton")

giveButton.addEventListener("click", () => {
  var choosedMoney = document.getElementById('Amount').value
  choosedMoney = parseInt(choosedMoney)
  var RealchoosedMoney = choosedMoney * 100
  var stripeHandler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: "en",
    token: function(token){
      console.log("")
      fetch("/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          stripeTokenid: token.id,
          amount: choosedMoney
        })
      }).then((res) => {
        return res.json()
      }).then((data) => {
        alert(data.Message)
      }).catch((error) => {
        console.error(error)
      })
    }
  })
  stripeHandler.open({
    amount: parseInt(RealchoosedMoney)
  })
})
