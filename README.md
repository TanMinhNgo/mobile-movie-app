# 🎬 Mobile Movie App

A modern React Native movie discovery app built with Expo, featuring movie search, details, and personalized recommendations.

## ✨ Features

- 🔍 **Movie Search** - Search for movies with smooth input experience
- 📱 **Movie Details** - View detailed information including cast, genres, budget
- ⭐ **Movie Ratings** - See ratings and reviews
- 💾 **Save Movies** - Save your favorite movies for later
- 👤 **User Profile** - Manage your profile and preferences
- 🎯 **Optimized Performance** - Smooth scrolling and efficient rendering

## 🚀 Tech Stack

- **React Native** with Expo
- **TypeScript** for type safety
- **NativeWind** for styling (Tailwind CSS)
- **TMDB API** for movie data
- **Expo Router** for navigation
- **Appwrite** for backend services

## 📱 Screenshots

*Add your app screenshots here*

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd mobile-movie-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   EXPO_PUBLIC_TMDB_API_KEY=your_tmdb_api_key
   EXPO_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
   EXPO_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
   ```

4. **Start the development server**
   ```bash
   npx expo start
   ```

## 📱 Running the App

In the output, you'll find options to open the app in:

- [Development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go) for quick testing

## 🏗️ Project Structure

```
mobile-movie-app/
├── app/                    # App screens (Expo Router)
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   ├── search.tsx     # Search screen
│   │   ├── saved.tsx      # Saved movies screen
│   │   └── profile.tsx    # Profile screen
│   ├── movies/            # Movie-related screens
│   │   └── [id].tsx       # Movie details screen
│   └── _layout.tsx        # Root layout
├── components/            # Reusable components
│   ├── MovieCard.tsx      # Movie card component
│   └── SearchBar.tsx      # Search input component
├── constants/             # App constants
│   ├── icons.ts          # Icon imports
│   └── images.ts         # Image imports
├── services/             # API and data services
│   ├── api.ts           # TMDB API calls
│   ├── appwrite.ts      # Appwrite backend
│   └── useFetch.ts      # Custom fetch hook
└── assets/              # Images, fonts, etc.
```

## 🎯 Performance Optimizations

- **Efficient FlatList** rendering with `removeClippedSubviews`
- **Uncontrolled TextInput** to prevent unnecessary re-renders
- **Image optimization** with proper sizing and caching
- **Debounced search** to reduce API calls
- **Memoized components** where beneficial

## 🔧 Development Tips

### Search Functionality
- Input uses uncontrolled TextInput for smooth typing
- Search triggers only on Enter press to optimize performance
- Debounced API calls prevent excessive requests

### Styling
- Uses NativeWind (Tailwind CSS) for consistent styling
- Custom color scheme defined in `tailwind.config.js`
- Responsive design with proper spacing and sizing

## 🌟 Key Features Implementation

### Movie Search
```typescript
// Uncontrolled input for performance
<SearchBar
  placeholder="Search Movies..."
  onSubmitEditing={(e) => setSearchQuery(e.nativeEvent.text)}
/>
```

### Movie Details
- Fetches detailed movie information from TMDB API
- Displays poster, overview, genres, budget, and revenue
- Smooth image loading with proper error handling

### Saved Movies
- Local storage using Appwrite
- Grid layout for optimal viewing
- Pull-to-refresh functionality

## 🚀 Building for Production

```bash
# Build for Android
npx expo build:android

# Build for iOS
npx expo build:ios

# Create development build
npx expo run:android
npx expo run:ios
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [TMDB](https://www.themoviedb.org/) for movie data API
- [Expo](https://expo.dev/) for the amazing development platform
- [NativeWind](https://www.nativewind.dev/) for Tailwind CSS in React Native

## 📞 Support

If you have any questions or need help, please open an issue or contact:
- Email: your-email@example.com
- GitHub: [@yourusername](https://github.com/yourusername)

---

Made with ❤️ using React Native and Expo
