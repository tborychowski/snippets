// nice vibrant view for macOS windows/panels

import SwiftUI

struct VibrantView: NSViewRepresentable {
	func makeNSView(context: Context) -> NSVisualEffectView {
		let view = NSVisualEffectView()
		view.blendingMode = .behindWindow
		view.state = .active
		view.material = .hudWindow
		view.isEmphasized = true
		return view
	}
	func updateNSView(_ nsView: NSVisualEffectView, context: Context) {}
}


// Usage:

NavigationStack {
	Text("Hello, World!")
}
.frame(maxWidth: .infinity, maxHeight: .infinity)
.ignoresSafeArea()
.background(VibrantView().ignoresSafeArea())
