import 'dart:convert';

import 'package:flutter/material.dart';
import 'drawer.dart';

import 'package:http/http.dart' as http;

class HomePage extends StatefulWidget {
  @override
  _HomePageState createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  TextEditingController _nameController = TextEditingController();

  var myText = "Change Me";

  var url = 'https://jsonplaceholder.typicode.com/photos';

  var data;

  @override
  void initState() {
    //screen start honese pehle yeh call hota hai
    //so api wagera yaha call kar sakte hai screen dikhanese pehle
    // ignore: todo
    // TODO: implement initState
    super.initState();
    getData();
  }

  getData() async {
    var res = await http.get(Uri.parse(url));
    data = jsonDecode(res.body);
    print(data);
    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.grey[200],
      appBar: AppBar(
        title: Text("Awesome App"),
      ),
      body: Padding(
        padding: const EdgeInsets.all(16.0),
        child: data != null
            ? ListView.builder(
                //GridView.builder(
                //    gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
                //        crossAxisCount: 1),
                itemBuilder: (context, index) {
                  return Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: ListTile(
                      title: Text(data[index]["title"]),
                      subtitle: Text("Id: ${data[index]["id"]}"),
                      leading: Image.network(data[index]["url"]),
                    ),
                  );
                },
                itemCount: data.length,
              )
            : Center(child: CircularProgressIndicator()),
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
