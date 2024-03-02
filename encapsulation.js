class user {
  #patientName
  #email
  #phone
  #bookingData
  #appointmentDate
  #appointmentSlot
  #treatment
  #servicePrice

  constructor(patientName, email, phone, bookingData, appointmentDate, appointmentSlot, treatment,  servicePrice){
    this.#patientName = patientName;
    this.#email = email;
    this.#phone = phone;
    this.#bookingData = bookingData;
    this.#appointmentDate = appointmentDate;
    this.#appointmentSlot = appointmentSlot;
    this.#treatment = treatment;
    this.#servicePrice = servicePrice;
  }
  
  appointmentInvoice(){
    return `
      Patient Name              : ${this.#patientName}
      Patient Email             : ${this.#email}
      Patient Phone             : ${this.#phone}
      Patient Booking Date      : ${this.#bookingData}
      Patient Appointment Date  : ${this.#appointmentDate}
      Patient Appointment Slot  : ${this.#appointmentSlot}
      Patient Treatment         : ${this.#treatment}
      Patient Service Price     : ${this.#servicePrice}
    `;
  }
}

const amin = new user ('Amin', 'amin@gmail.com', '+8801730553105', 'Mar 2, 2024', 'Mar 17, 2024', '10:00 AM - 10:30 AM', 'Teeth Cleaning', 89);

console.log(amin.appointmentInvoice());