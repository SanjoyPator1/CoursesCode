import 'package:awesomeapp/pages/bg_image.dart';
import 'package:awesomeapp/utils/constants.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final userNameController = TextEditingController();
  final passwordController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text("Login Page"),
        ),
        body: Stack(
          fit: StackFit.expand,
          children: [
            BgImage(),
            Center(
              child: Padding(
                padding: const EdgeInsets.all(8.0),
                child: SingleChildScrollView(
                  child: Card(
                    child: Column(
                      children: [
                        Padding(
                            padding: const EdgeInsets.all(16.0),
                            child: Form(
                              child: Column(
                                children: [
                                  TextFormField(
                                    decoration: InputDecoration(
                                        hintText: "Enter Username",
                                        labelText: "Username"),
                                  ),
                                  SizedBox(
                                    height: 20,
                                  ),
                                  TextFormField(
                                    decoration: InputDecoration(
                                        hintText: "Enter Password",
                                        labelText: "Password"),
                                    obscureText: true,
                                  ),
                                ],
                              ),
                            )),
                        SizedBox(
                          height: 20,
                        ),
                        ElevatedButton(
                          onPressed: () {
                            Constants.prefs.setBool("LoggedIN", true);
                            //replacement becoz we dont want to come back to the login page
                            Navigator.pushReplacementNamed(context, "/home");
                          },
                          child: Text(
                            "Sign In",
                          ),
                          style: ElevatedButton.styleFrom(
                            primary: Colors.purple,
                          ),
                        )
                      ],
                    ),
                  ),
                ),
              ),
            ),
          ],
        ));
  }
}
