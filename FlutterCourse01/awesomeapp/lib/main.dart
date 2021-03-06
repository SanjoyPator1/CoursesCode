import 'package:awesomeapp/pages/home_page.dart';
import 'package:awesomeapp/pages/login_page.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(MaterialApp(
    title: "Awesome App", //show this on minimised
    home: LoginPage(),
    theme: ThemeData(
      primaryColor: Colors.purple,
    ),
    routes: {
      "/login":(context)=>LoginPage(),
      "/home":(context)=>HomePage(),

    },
  ));
}
