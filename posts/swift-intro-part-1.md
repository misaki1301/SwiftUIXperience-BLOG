---
title: An story of how Apple change the way we code for iOS
date: '2024-09-04'
draft: false
tags:
  - SwiftUI
  - iOS
comments: {}
---
![Image](/uploads/pexels-nickoloui-2473183(1).jpg)\
*Photo by Nikolaos Dimou: [source](https://www.pexels.com/photo/black-macbook-pro-2473183/)*

Around 2019, Apple introduces SwiftUI, a new way to code for Apple devices, making it so easy and fast to build interfaces without compromising the effort learning about constraints and the interface builder used for UIKit.

<!--more-->

What kind of changes, you tell?

Well, in SwiftUI taking example of the button, now you can code it and see a preview of it in mere seconds

Example:
```swift
struct ExampleView: View {
    var body: some View {
        VStack {
            Button("Submit SwiftUI", action: {}})
        }
        .padding()
    }
}
```

and the preview looks like this:
![Image](/uploads/screenshot-2024-09-12-at-6.40.26-pm.png)

in the UIKit side:
![Image](/uploads/screenshot-2024-09-12-at-6.57.23-pm.png)

The ViewController will look like this:

> [!tip]
>
> Don't forget to add the reference of the button of the storyboard
> It won't work without it

```swift
import UIKit

class HelloViewController: UIViewController {

    @IBOutlet weak var submitButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
        submitButton.addTarget(
        self, 
        action: #selector(submitHelloWorld), 
        for: .touchUpInside
        )
    }
    
    @objc func submitHelloWorld() {
        print("Hello World!")
    }
    
}
```

Classic implementation and kinda messy if we make some updates to the reference...

what about the SwiftUI one?

Well, if you looked carefully at the code with SwiftUI, the component Button has a parameter called action, so we can pass a function there :)

```swift
struct ExampleView: View {
    var body: some View {
        VStack {
            Button("Submit SwiftUI", action: submit)
        }
        .padding()
    }
    
    private func submit() {
        print("Hello World!")
    }
}
```

OK
