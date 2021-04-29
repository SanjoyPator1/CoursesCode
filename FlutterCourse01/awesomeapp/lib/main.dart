import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "Awesome App", //show this on minimised
    home: HomePage(),
  ));
}

class HomePage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text("Awesome App"),
      ),
      body: Container(
        child: Center(child: Text("Hi Flutter")),
      ),
    );
  }
}
