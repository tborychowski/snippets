import SwiftUI
import SwiftData


@Model
final class Model1 {
	var id: UUID = UUID()
	var name: String
	init(name: String = "") {
		self.name = name
	}
}

@Model
final class Model2 {
	var id: UUID = UUID()
	var name: String
	init(name: String = "") {
		self.name = name
	}
}



// Main App
@main
struct MyApp: App {

	var sharedModelContainer: ModelContainer = {

		let schema = Schema([ Model1.self, Model2.self ])
		let modelConfiguration = ModelConfiguration(schema: schema, isStoredInMemoryOnly: false)

		do {
			return try ModelContainer(for: schema, configurations: [modelConfiguration])
		} catch {
			fatalError("Could not create ModelContainer: \(error)")
		}
	}()

	var body: some Scene {
		WindowGroup {
			ContentView()
				.sharedModelContainer(sharedModelContainer)
		}
	}
}
