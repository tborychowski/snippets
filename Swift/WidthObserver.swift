// Geometry width observer

import SwiftUI

struct WidthObserver: View {
	var onWidthChange: (CGFloat) -> Void = { _ in }

	func updateLayout(_ width: CGFloat) {
		onWidthChange(width)
	}

	var body: some View {
		GeometryReader { geometry in
			Color.clear
				.onAppear {
					updateLayout(geometry.size.width)
				}
				.onChange(of:geometry.size.width) {
					updateLayout(geometry.size.width)
				}
		}
		.frame(height: 0)
	}
}


// Usage:

WidthObserver() { availableWidth in
	print("Available width: \(availableWidth)")
}
