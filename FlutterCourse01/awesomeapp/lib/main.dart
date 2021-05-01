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
            child: Column(
              children: [
                Image.asset(
                  "assets/bg1.jpg",
                  fit: BoxFit.cover,
                ),
                SizedBox(height: 20),
                Text(
                  myText,
                  style: TextStyle(fontSize: 25, fontWeight: FontWeight.bold),
                ),
                SizedBox(height: 20),
                Padding(
                  padding: const EdgeInsets.all(16.0),
                  child: TextField(
                    controller: _nameController,
                    keyboardType: TextInputType.text,
                    //obscureText: true,
                    decoration: InputDecoration(
                      border: OutlineInputBorder(),
                      hintText: "Enter Something here",
                      labelText: "Name",
                    ),
                  ),
                )
              ],
            ),
          ),
        ),
      ),
      drawer: Drawer(
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            // DrawerHeader(
            //   child: Text(
            //     "Hi I am drawer",
            //     style: TextStyle(color: Colors.white),
            //   ),
            //   decoration: BoxDecoration(color: Colors.purple),
            // ),
            UserAccountsDrawerHeader(
              accountName: Text("Sanjoy"),
              accountEmail: Text("sp@gmail.com"),
              currentAccountPicture: CircleAvatar(
                backgroundImage: NetworkImage(
                    "https://images.unsplash.com/photo-1549692520-acc6669e2f0c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"),
              ),
            ),
            ListTile(
              leading: Icon(Icons.person),
              title: Text("Account"),
              subtitle: Text("Personal"),
              trailing: Icon(Icons.edit),
            ),
            ListTile(
              leading: Icon(Icons.email),
              title: Text("Email"),
              subtitle: Text("help@gmail.com"),
              trailing: Icon(Icons.send),
            )
          ],
        ),
      ),
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
