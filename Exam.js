
// Person
class Person {
  constructor(name, address, email, phone) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
  }

  toString() {
    return `ชื่อ: ${this.name}
    ที่อยู่: ${this.address}
    อีเมล: ${this.email}
    เบอร์โทรศัพท์: ${this.phone}`;
  }
}

// Account
class Account {
  constructor(username, password, accountType,status) {
    this.username = username;
    this.password = password;
    this.accountType = accountType;
    this.status=status;
}

  toString() {
    return `ชื่อผู้ใช้: ${this.username}
    รหัสผ่าน: ${this.password}
    ประเภทบัญชี: ${this.accountType}
    สถานะบัญชี:${this.status}`;
  }
}

class Guest extends Person {
  constructor(name, address, email, phone) {
    super(name, address, email, phone);
  }

  toString() {
    return `ข้อมูลผู้เข้าพัก:${super.toString()}`;
  }
}

// พนักงานต้อนรับ
class Receptionist extends Person {
  constructor(name, address, email, phone) {
    super(name, address, email, phone);
  }

  toString() {
    return `ข้อมูลพนักงานต้อนรับ:${super.toString()}`;
  }
}

// ห้องพัก
class Room {
  constructor(roomNumber, style, view, price, status) {
    this.roomNumber = roomNumber;
    this.style = style;
    this.view = view;
    this.price = price;
    this.status = status;
  }

  toString() {
    return `หมายเลขห้อง: ${this.roomNumber}
    ประเภท: ${this.style}
    วิว: ${this.view}
    ราคา: ${this.price} บาท
    สถานะ: ${this.status}`;
  }
}
//คลาสHotel
class Hotel {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.rooms = [];
  }

  addRoom(room) {
    this.rooms.push(room);
  }

  getRooms() {
    return this.rooms;
  }

  toString() {
    return `ชื่อโรงแรม: ${this.name}
    สถานที่ตั้ง: ${this.location}`;
  }
}
//การจองห้องพัก
class RoomBooking {
  constructor(guest, room, startDate, durationDays, status) {
    this.guest = guest;
    this.room = room;
    this.startDate = startDate;
    this.durationDays = durationDays;
    this.status = status;
  }

  toString() {
    return `ข้อมูลการจอง:ผู้เข้าพัก: ${this.guest.name}
    หมายเลขห้อง: ${this.room.roomNumber}
    วันที่เข้าพัก: ${this.startDate}
    จำนวนวันเข้าพัก: ${this.durationDays}
    สถานะ: ${this.status}`;
  }
}
const AccountType = {
  Guest: "Guest",
  Receptionist: "Receptionist",
};

const RoomStatus = {
  Available: "Available",
  Booked: "Booked",
  Unavailable: "Unavailable",
};

const BookingStatus = {
  Confirmed: "Confirmed",
  Pending: "Pending",
  Cancelled: "Cancelled",
};
const AccountStatus= {
    Active:"Active",
    Banned:"Banned"
}
const main = () => {
  // สร้าง guestชื่อว่าAliceกับBob
  const guestAlice = new Guest(
    "Alice",
    "แสนสุข",
    "020@email.com",
    "01010101010"
  );
  const guestBob = new Guest("Bob", "แสนสุข", "021@email.com", "02020202020");

  // แสดงข้อมูลผู้เข้าพัก
  console.log(guestAlice.toString());
  console.log(guestBob.toString());
    
  const account1 = new Account(
    "001",
    "1111111",
    "Guest",
    AccountStatus.Active
    );
    const account2 = new Account(
      "002",
      "2222222",
      "Guest",
      AccountStatus.Banned
    );
    console.log(account1.toString());
    console.log(account2.toString());
  // สร้างพนักงานชื่อว่า Catherine และ David
  const receptionistCatherine = new Receptionist(
    "Catherine",
    "70/5",
    "catherine@gmail.com",
    "1110002223"
  );
  const receptionistDavid = new Receptionist(
    "David",
    "10/5",
    "david@gmail.com",
    "2220004145"
  );

  // แสดงข้อมูลพนักงาน
  console.log(receptionistCatherine.toString());
  console.log(receptionistDavid.toString());

  // สร้างโรงแรม
  const hotel = new Hotel("Awesome Hotel", "1234 Resort Blvd");

  // เพิ่มห้อง
  const room1 = new Room(
    "101",
    "Double bed",
    "Sea view",
    9900,
    RoomStatus.Available
  );
  const room2 = new Room(
    "102",
    "Twin bed",
    "Pool view",
    8000,
    RoomStatus.Available
  );
  const room3 = new Room(
    "103",
    "Twin bed",
    "Sea view",
    7000,
    RoomStatus.Available
  );
  const room4 = new Room(
    "104",
    "Double bed",
    "Pool view",
    7400,
    RoomStatus.Available
  );

  hotel.addRoom(room1);
  hotel.addRoom(room2);
  hotel.addRoom(room3);
  hotel.addRoom(room4);

  // แสดงรายละเอียดห้องที่พร้อมจอง
  console.log("ห้องที่พร้อมจอง:");
  hotel.getRooms().forEach((room) => {
   if(room.status===RoomStatus.Available){
    console.log(room.toString());
   }
  });

  // การจองห้อง
  const bobBooking = new RoomBooking(
    guestBob,
    room1,
    "2024-03-16",
    3,
    BookingStatus.Confirmed
  );
  const catherineBooking = new RoomBooking(
    guestAlice,
    room3,
    "2024-03-19",
    5,
    BookingStatus.Confirmed
  );

  // แสดงข้อมูลการจอง
  console.log(bobBooking.toString());
  console.log(catherineBooking.toString());
};

main();