# CurioWeave

![CurioWeave Logo](https://via.placeholder.com/200?text=CurioWeave)

> A decentralized content sharing platform built on Arweave's permanent storage network.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.x-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![Arweave](https://img.shields.io/badge/Arweave-2.x-blue.svg)](https://www.arweave.org/)

## 📋 Overview

CurioWeave is a decentralized content platform that enables users to share, discover, and engage with permanent content stored on the Arweave blockchain. Built with modern web technologies and leveraging Arweave's permanent storage capabilities, CurioWeave offers a censorship-resistant alternative to traditional content platforms.

## ✨ Features

- **Decentralized Storage**: All content is permanently stored on the Arweave blockchain.
- **User Profiles**: Create and customize your personal profile.
- **Content Upload**: Share images, videos, and other content types.
- **Wallet Integration**: Connect with Arweave wallets for seamless transactions.
- **Transaction Tracking**: Monitor your Arweave transactions within the platform.
- **Content Discovery**: Explore content shared by other users.
- **Responsive Design**: Modern UI that works across desktop and mobile devices.

## 🖥️ Screenshots

![Screenshot 1](https://via.placeholder.com/600x300?text=CurioWeave+Screenshot+1)
![Screenshot 2](https://via.placeholder.com/600x300?text=CurioWeave+Screenshot+2)

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn
- ArLocal (for local development) or access to Arweave mainnet

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/nishikant23/CurioWeave.git
   cd CurioWeave
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Configure environment variables:
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Using ArLocal for Development

1. Install ArLocal:
   ```bash
   npm install -g arlocal
   ```

2. Start ArLocal in a separate terminal:
   ```bash
   arlocal
   ```

3. Configure your `.env.local` to use the ArLocal endpoint:
   ```
   VITE_ARWEAVE_URL=http://localhost:1984
   ```

## 🏗️ Architecture

CurioWeave is built with a modern tech stack:

- **Frontend**: React, TypeScript, Vite
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **Blockchain Interaction**: arweave-js
- **API Queries**: GraphQL

The application follows a component-based architecture with clean separation of concerns:

- **Components**: UI building blocks
- **Contexts**: State management
- **Services**: API interactions
- **Utils**: Helper functions
- **Hooks**: Reusable logic

## 🔄 Transaction Processing

CurioWeave uses Arweave's GraphQL API to fetch and process transactions. The platform categorizes transactions into several types:

- **Content Upload**: When users upload images, videos, or other content
- **Profile Update**: When users modify their profile information
- **Sent**: Tokens sent to other addresses
- **Received**: Tokens received from other addresses

Each transaction includes metadata stored as tags, which CurioWeave parses and displays in a user-friendly interface.

## 🔒 Security

- User data is stored on Arweave's permanent and immutable blockchain
- Private keys never leave the user's device
- All interactions with Arweave are performed client-side

## 🛣️ Roadmap

- [ ] Social features (follow users, like content)
- [ ] Comment system for content engagement
- [ ] Token incentive mechanism
- [ ] Advanced content discovery algorithms
- [ ] Mobile application

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgements

- [Arweave](https://www.arweave.org/) for providing the permanent storage infrastructure
- [React](https://reactjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
- All contributors who have helped shape CurioWeave

---

Built with ❤️ by [Nishikant](https://github.com/nishikant23)
