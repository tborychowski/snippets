// Autofocus a text field when it appears or the app becomes active.

import SwiftUI

struct AutoFocusModifier: ViewModifier {
	@FocusState private var isFocused: Bool

	func body(content: Content) -> some View {
		content
			.focused($isFocused)
			.onAppear {
				isFocused = true
			}
			.onReceive(NotificationCenter.default.publisher(for: NSApplication.didBecomeActiveNotification)) { _ in
				isFocused = true
			}

	}
}

extension View {
	func autoFocus() -> some View {
		modifier(AutoFocusModifier())
	}
}



// Usage:
TextField("Enter text", text: $text)
	.autoFocus()
