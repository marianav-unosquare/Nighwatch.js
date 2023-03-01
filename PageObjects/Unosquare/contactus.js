module.exports = {
    url: 'https://www.unosquare.com/contact-us/',
    elements: {
      contactHeader:{selector:'h1[class="elementor-heading-title elementor-size-default"]'},
      nameInput:'#firstname-b0570355-5abf-47d4-b00c-fcf04db071cc',
      emailInput: '#email-b0570355-5abf-47d4-b00c-fcf04db071cc',
      messageInput: '#message-b0570355-5abf-47d4-b00c-fcf04db071cc',
      image: 'img[alt="Contact unosquare"]',
      submitBtn: {
        selector:'input[value="Submit"]',},
      parragraph: {
        selector: 'section[class="elementor-section elementor-top-section elementor-element elementor-element-f1649bc elementor-section-content-middle elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"] p:nth-child(1)'}
    
    }
  };