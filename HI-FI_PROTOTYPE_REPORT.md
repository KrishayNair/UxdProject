# High-Fidelity Prototype Report

## 3. Hi-Fi Prototype

Based on various discussions and user research findings, we developed a high-fidelity prototype that integrates core features focused on waste management and upcycling. The prototype was built using Next.js and Tailwind CSS, optimized for mobile devices with a responsive design that maintains a consistent mobile app appearance.

### Design Decisions and Changes

While developing the prototype, several design decisions were made to enhance usability and user experience:

● **Integrated Navigation System**: We implemented a dual navigation approach with both a bottom navigation bar and a slide-out navigation drawer. The bottom navigation provides quick access to primary sections (Home, Progress, History), while the drawer offers additional options and an expandable "Start a project" section for accessing scan, chat, and live features.

● **Dual-Mode Scanning**: The scanning feature was designed with two distinct modes - Waste and Upcycle - allowing users to choose their intent before scanning. This reduces cognitive load and provides more targeted results.

● **Unified Chat Interface**: We consolidated multiple communication methods (text chat, voice chat, and live interaction) into a single ChatPage component with different modes, making it easier for users to switch between interaction types without navigating to separate screens.

● **Progress Tracking Dashboard**: Instead of separate screens for different metrics, we created a unified Progress page with tabbed sections for Recycling and Upcycling, allowing users to view all their sustainability contributions in one place.

● **Comprehensive History Management**: The History page was designed to consolidate all user activities including saved chats, scan history, chat history, and live interaction history, with search functionality to help users find past interactions quickly.

● **Visual Feedback and Accessibility**: We implemented clear visual indicators for active states, smooth transitions, and proper camera permission handling to ensure users understand the app's state and can recover from errors easily.

### High-Fidelity Prototype Final Features

#### Ease of Use Features (Navigation and Task-Based)

● **Dual-Mode Scanning**: Users can scan waste items in two modes - "Waste" for disposal guidance and "Upcycle" for creative reuse suggestions. The camera interface includes a scanning frame overlay and handles camera permissions gracefully, providing clear feedback when access is denied.

● **Quick Action Buttons**: The dashboard features prominent action buttons for Waste and Upcycle modes, along with a "SCAN NOW" button for immediate access to the scanning feature. This allows users to quickly start their waste management tasks.

● **Previous Projects Display**: Users can easily access their previous projects directly from the dashboard through a horizontal scrolling list, making it simple to revisit past upcycling or recycling activities.

● **Multiple Interaction Methods**: The app provides three ways to interact with the system:
  - **Text Chat**: Users can type messages and select from predefined categories (Recycling, Upcycling, Waste Management) to get guidance on waste disposal and upcycling ideas.
  - **Voice Chat**: A voice interaction mode that allows users to speak their queries, making the app more accessible and convenient for hands-free use.
  - **Live Mode**: Real-time interaction capability for immediate assistance.

● **Progress Tracking**: The Progress page provides comprehensive tracking of user's sustainability efforts with:
  - CO2 emissions saved (displayed prominently at the top)
  - Separate tabs for Recycling and Upcycling metrics
  - Detailed statistics including monthly waste, daily progress, items saved from landfill, and most common materials
  - Visual progress bars and goal tracking
  - Streak indicators to encourage continued engagement

● **History and Search**: Users can access their complete interaction history through the History page, which includes:
  - Saved chats with timestamps
  - Scan history showing previously scanned items
  - Chat history for text-based interactions
  - Live history for voice interactions
  - Search functionality to quickly find past interactions

● **Back Button and Easy Navigation**: Every screen includes a visible back button, and the always-available bottom navigation panel ensures users can easily navigate between main sections. The navigation drawer provides additional options and can be accessed from most screens.

● **Responsive Mobile Design**: The entire prototype is optimized for mobile devices with a fixed maximum width (375px) to ensure consistent mobile app appearance, proper touch targets, and smooth scrolling interactions.

#### Features Highlighting Environmental and Social Benefits

● **CO2 Emissions Tracking**: The Progress page prominently displays the amount of CO2 emissions saved, helping users understand their environmental impact. The system tracks both recycling and upcycling contributions separately.

● **Waste Reduction Metrics**: Users can see detailed statistics about:
  - Monthly waste processed (with breakdown of recycled vs. trashed items)
  - Items saved from landfill
  - Most common recycling and upcycling materials
  - Current and previous upcycling projects

● **Goal Setting and Achievement**: The app includes goal tracking for both recycling (e.g., monthly waste goals) and upcycling (e.g., waste saved goals), with visual progress indicators and "On Track" status indicators to motivate continued sustainable behavior.

● **Project History**: Users can track their upcycling projects, including current projects and previous projects, helping them see their creative contributions to waste reduction over time.

#### Trust, Privacy, and Other Issues

● **Clear Visual Feedback**: The interface provides clear visual feedback for all interactions:
  - Active states for navigation items
  - Loading states for camera access
  - Error messages for permission denials
  - Smooth transitions between screens

● **Camera Permission Handling**: The scanning feature includes proper camera permission requests with clear messaging when access is denied, and provides an option to retry enabling camera access.

● **Data Organization**: All user data is organized logically:
  - Previous projects are easily accessible from the dashboard
  - History is categorized by type (saved chats, scans, chats, live interactions)
  - Search functionality helps users find specific past interactions

● **Accessibility Considerations**: 
  - Large touch targets for mobile interaction
  - Clear visual hierarchy with appropriate font sizes
  - Color contrast for readability
  - Voice interaction option for users who prefer or require voice input

● **User Personalization**: The interface greets users by name (e.g., "Hi, David") and displays the current date, creating a personalized experience.

● **Error Recovery**: Users can easily recover from errors or navigate away from any screen using the back button or bottom navigation, ensuring they never feel trapped in the interface.

### Technical Implementation

The prototype was built using modern web technologies:
- **Next.js**: React framework for building the application
- **TypeScript**: For type safety and better code maintainability
- **Tailwind CSS**: For responsive styling and consistent design system
- **Mobile-First Design**: Optimized for mobile viewport with fixed container width
- **Component-Based Architecture**: Modular components for maintainability and reusability

### User Experience Enhancements

● **Smooth Transitions**: All screen transitions and interactions include smooth animations to provide a polished user experience.

● **Intuitive Iconography**: Clear icons are used throughout the interface to help users understand functionality at a glance.

● **Consistent Design Language**: The app uses a consistent color scheme (green gradient theme) and design patterns throughout, creating a cohesive user experience.

● **Contextual Actions**: Actions are presented contextually - for example, the "Start a project" section in the navigation drawer expands to show relevant options (Scan, Chat, Live) only when needed.

This high-fidelity prototype demonstrates a comprehensive waste management and upcycling application that prioritizes ease of use, environmental impact tracking, and user engagement while maintaining trust and accessibility throughout the user journey.

