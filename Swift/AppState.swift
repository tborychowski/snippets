// Shared state

import Foundation
import Observation


@Observable
final class AppState: @unchecked Sendable {

	var someVariable: Int = 100

	static let shared = AppState()

	init () {
	}
}



// Usage
print(AppState.shared.someVariable)
