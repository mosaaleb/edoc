# Edoc

![screenshot](screenshot.jpg)

## Introduction
This is the frontend of the capstone project in [Microverse](https://www.microverse.org/) curriculum
The project handles searching physicians by their specialty and handles creating appointments with patients.

It consumes backend API built with rails

You can check back-end [here](https://github.com/mosaaleb/edoc-api/)

**Features**
- Mobile app.
- Authentication with JWT.
- Filtering physicians by category.
- Creating appointments with physicians.
- Leaving upvotes and reviews.

## Built With
- React
- Redux
- TailwindCSS
- React router

## Live Demo

[Live Demo Link](https://edoc-capstone.herokuapp.com/)

### Prerequisites
- create-react-app
- yarn or npm

### Setup
```
git clone git@github.com:mosaaleb/edoc.git
cd edoc
yarn install
```

### Running the project
- Clone the [backend](https://github.com/mosaaleb/edoc-api).
- Follow the instruction on how to set up the backend.
- Setup the frontend part (check the Setup section).
- Start the server on both the backend and frontend.
```ruby
# backend Rails
rails s
# frontend React
npm start
```
- Start developing.

**Server**
`yarn react-scripts start`

### Automated Tests:
There are no automated tests yet added for this project.

## Author

👤 **Muhammad Ebeid**

- Github: [@mosaaleb](https://github.com/mosaaleb)
- Twitter: [@muhammadebeid](https://twitter.com/muhammadebeid)
- Linkedin: [muhammadebeid](https://www.linkedin.com/in/muhammadebeid/)
- [muhammed.ebeid@gmail.com](muhammed.ebeid@gmail.com)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](issues/).

## Coming Features
- [ ] Doctor profile page listing all reviews left by patients.
- [ ] Consuming doctor likes from back-end API.

**Do you have a specific feature in mind?** 
Please [Submit](https://github.com/mosaaleb/edoc/labels/enhancement) it.

## Acknowledgments
- [UI Inspiration](https://www.behance.net/gallery/77208667/MediCo-Medical-mobile-app-UIUX-design?tracking_source=search%7Cmobile%20app)

## 📝 License
This project is [MIT](https://opensource.org/licenses/MIT) licensed.
