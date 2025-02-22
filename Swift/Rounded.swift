// shortcut for rounded corners


import SwiftUI

struct RoundedCorners: ViewModifier {
	var radius: CGFloat

	func body(content: Content) -> some View {
		content
			.clipShape(RoundedRectangle(cornerRadius: radius))
	}
}

extension View {
	func rounded(_ radius: CGFloat = 20) -> some View {
		modifier(RoundedCorners(radius: radius))
	}
}

// Usage
VStack {
	Text("Hello, World!")
}
.padding()
.background(Color.blue)
.rounded(10)
