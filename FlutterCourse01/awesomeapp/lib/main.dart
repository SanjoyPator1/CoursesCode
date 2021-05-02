import 'package:awesomeapp/pages/home_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "Awesome App", //show this on minimised
    home: HomePage(),
    theme: ThemeData(
      primaryColor: Colors.purple,
    ),
  ));
}




