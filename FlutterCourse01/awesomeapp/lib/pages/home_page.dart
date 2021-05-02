import 'package:flutter/material.dart';
import 'ChangeNameCard.dart';
import 'drawer.dart';

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController _nameController = TextEditingController();

  var myText = "Change Me";

  @override
  void initState() {
    //screen start honese pehle yeh call hota hai
    //so api wagera yaha call kar sakte hai screen dikhanese pehle
    // ignore: todo
    // TODO: implement initState
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text("Awesome App"),
      ),
      body: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Card(
            child: ChangeNameCard(myText: myText, nameController: _nameController),
          ),
        ),
      ),
      drawer: Mydrawer(),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          myText = _nameController.text;
          //to show in screen the changes
          setState(() {});
        },
        child: Icon(Icons.refresh),
      ),
    );
  }
}