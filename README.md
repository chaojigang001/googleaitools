[README.md](https://github.com/user-attachments/files/22387770/README.md)
# 岐黄之思 (Inner Canon AI)

**岐黄之思 (Inner Canon AI)** is a sophisticated AI agent embodying the wisdom of Traditional Chinese Medicine (TCM). It provides professional advice and analysis based on a curated knowledge base of classical TCM texts, most notably the *Huangdi Neijing* (Yellow Emperor's Inner Canon).

The application is designed to act as a rigorous, knowledgeable consultant, citing its sources from classical literature to provide users with well-founded insights into their health concerns from a TCM perspective.

## Features

*   **Expert TCM Consultation:** Leverages the Google Gemini model with highly specific system prompts to act as a TCM expert.
*   **Classical Text Citations:** All key points in the AI's responses are backed by direct quotes from classical texts, with sources clearly cited.
*   **Custom Font Rendering:** Quoted classical texts are displayed in a traditional FangSong typeface for authenticity and readability, distinguishing them from the main commentary.
*   **Bilingual Interface:** Fully localized for both Chinese (zh) and English (en), allowing users to switch languages seamlessly.
*   **Streaming Responses:** AI responses are streamed word-by-word, providing immediate feedback and a dynamic user experience.
*   **Responsive & Clean UI:** The user interface is designed to be clean, professional, and fully responsive, offering a great experience on both desktop and mobile devices.
*   **Example Queries:** A welcome screen provides users with an example to help them understand how to interact with the AI.

## Technology Stack

*   **Frontend Framework:** React.js
*   **AI:** Google Gemini API (`@google/genai`)
*   **Language:** TypeScript
*   **Styling:** Tailwind CSS
*   **Markdown Rendering:** `react-markdown` with `rehype-raw` for secure HTML rendering.
*   **Module Bundling:** Modern ES Modules with an `importmap` (no build step needed for development).

## Project Updates

### 2024-05-22: README & Rendering Fix
*   **Added `README.md`:** This file was created to provide comprehensive documentation for the project.
*   **Fixed Font Tag Rendering:** Resolved an issue where `<font face="仿宋">` tags from the AI's response were displayed as raw text. The implementation was updated to replace these tags with `<span class="font-fangsong">` and use the `rehype-raw` plugin for `react-markdown` to correctly process and style the content. This ensures classical text citations are properly rendered without showing HTML tags.

### Initial Version
*   **Core Functionality:** Implemented the main chat interface, state management, and API service to communicate with the Gemini API.
*   **Prompt Engineering:** Developed a detailed system prompt to guide the AI to act as a TCM expert, ensuring responses are based on a specific knowledge base of classical texts.
*   **UI/UX:** Designed the visual theme, including colors, fonts, and layout, to create a professional and calming user experience. Implemented components for the header, chat window, input area, and welcome screen.
*   **Localization:** Added support for Chinese and English languages.
