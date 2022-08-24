import mysql.connector as sqltor
from tkintertable import TableCanvas


import tkinter
from tkinter import *
from tkinter import ttk
ol = []
window = Tk()
window.geometry('1920x1080')
window.configure(bg='black')

# Heading
photo = PhotoImage(file=r"C:\Users\ullas\OneDrive\Desktop\Screenshot 2022-08-04 165237.png")
label1 = Label(window, image=photo, borderwidth=10, relief="raised", height=150)
label1.pack()

label2 = Label(window, text='Filters', font=("Impact", 30), bg='black', fg='red')
company = ''
CPU = ''
raminlap = 0
scrnlap = 0
grplap = ''
price =10000000000000


# Start Button
def start():
    startbutton.config(state=DISABLED)
    global ol
    label2.pack(anchor=NW)
    filters = ['COMPANY', 'CPU', 'RAM', 'SCREEN', 'GRAPHICS', 'PRICE']
    x = IntVar()
    f = Frame(window)
    f.pack()

    # print(ol)

    def choice():
        global ol
        newframe = Frame(window)
        newframe.pack()
        c = IntVar()
        p = IntVar()
        r = IntVar()
        sc = IntVar()
        g = IntVar()
        price = 0
        # print(ol)

        CpU = 0
        if x.get() == 0:

            COMP = ['HP', 'MSI', 'Mi', 'Razer', 'Apple', 'Acer', 'Dell', 'Lenovo', 'LG', 'ASUS']

            def maker():
                global company
                if c.get() == 0:
                    company = 'HP'
                elif c.get() == 1:
                    company = 'MSI'
                elif c.get() == 2:
                    company = 'Mi'
                elif c.get() == 3:
                    company = 'Razer'
                elif c.get() == 4:
                    company = 'Apple'
                elif c.get() == 5:
                    company = 'Acer'
                elif c.get() == 6:
                    company = 'Dell'
                elif c.get() == 7:
                    company = 'Lenovo'
                elif c.get() == 8:
                    company = 'LG'
                elif c.get() == 9:
                    company = 'ASUS'
                ol.append(company)
                # print(ol)

            for q in range(len(COMP)):
                radiobuttoncomp = Radiobutton(newframe, text=COMP[q], variable=c, value=q, indicatoron=0, padx=25,
                                              pady=10, bg='black', fg='red', selectcolor='#78ffd6', command=maker)
                radiobuttoncomp.grid(row=0, column=q)


        elif x.get() == 1:

            PROC = ['Intel i3', 'Intel i5', 'Intel i7', 'Intel i9', 'Ryzen 3', 'Ryzen 5', 'Ryzen 7']

            def processor():
                global CPU
                if p.get() == 0:
                    CPU = 'i3'
                elif p.get() == 1:
                    CPU = 'i5'
                elif p.get() == 2:
                    CPU = 'i7'
                elif p.get() == 3:
                    CPU = 'i9'
                elif p.get() == 4:
                    CPU = 'Ryzen 3'
                elif p.get() == 5:
                    CPU = 'Ryzen 5'
                elif p.get() == 6:
                    CPU = 'Ryzen 7'

            for l in range(len(PROC)):
                radiobuttoncpu = Radiobutton(newframe, text=PROC[l], variable=p, value=l, indicatoron=0, padx=25,
                                             pady=10, bg='black', fg='red', selectcolor='#78ffd6', command=processor)
                radiobuttoncpu.grid(row=0, column=l)

        elif x.get() == 2:

            RAMS = [4, 8, 16, 32]

            def ramfunc():
                global raminlap
                if r.get() == 0:
                    raminlap = 4
                elif r.get() == 1:
                    raminlap = 8
                elif r.get() == 2:
                    raminlap = 16
                elif r.get() == 3:
                    raminlap = 32

            for h in range(len(RAMS)):
                radiobuttonram = Radiobutton(newframe, text=str(RAMS[h]) + 'GB', variable=r, value=h, indicatoron=0,
                                             padx=25, pady=10, bg='black', fg='red', selectcolor='#78ffd6',
                                             command=ramfunc)
                radiobuttonram.grid(row=0, column=h)
        elif x.get() == 3:

            SCREENSZ = [13, 14, 16, 17]

            def scrnfunc():
                global scrnlap
                if sc.get() == 0:
                    scrnlap = 13
                elif sc.get() == 1:
                    scrnlap = 14
                elif sc.get() == 2:
                    scrnlap = 16
                elif sc.get() == 3:
                    scrnlap = 17

            for w in range(len(SCREENSZ)):
                radiobuttonscreen = Radiobutton(newframe, text=str(SCREENSZ[w]) + ' in', variable=sc, value=w,
                                                indicatoron=0, padx=25, pady=10, bg='black', fg='red',
                                                selectcolor='#78ffd6', command=scrnfunc)
                radiobuttonscreen.grid(row=0, column=w)
        elif x.get() == 4:

            GRP = ['INTEGRATED', 'DEDICATED']

            def grpfunc():
                global grplap
                if g.get() == 0:
                    grplap = 'i'
                elif g.get() == 1:
                    grplap = 'd'

            for e in range(len(GRP)):
                radiobuttongrp = Radiobutton(newframe, text=GRP[e], variable=g, value=e, indicatoron=0, padx=25,
                                             pady=10, bg='black', fg='red', selectcolor='#78ffd6', command=grpfunc)
                radiobuttongrp.grid(row=0, column=e)
        elif x.get() == 5:

            prc = Entry(newframe, bg='white', fg='red', )
            prc.grid(row=0, column=0)

            def submit():
                global price
                price = prc.get()

            subb = Button(newframe, text='SUBMIT', command=submit, padx=25, pady=0, bg='black', fg='red')
            subb.grid(row=0, column=1)

    for index in range(len(filters)):
        radiobutton = Radiobutton(f,
                                  text=filters[index],  # adds text to radio buttons
                                  variable=x,  # groups radiobuttons together if they share the same variable
                                  value=index,  # assigns each radiobutton a different value
                                  padx=25,  # adds padding on x-axis
                                  font=("Impact", 30),
                                  bg='black',
                                  fg='red',

                                  indicatoron=0,  # eliminate circle indicators

                                  command=choice  # set command of radiobutton to function
                                  )
        radiobutton.grid(row=0, column=index)


startbutton = Button(window, text='CLICK TO START', fg='red', font=("Impact", 30), bg='black', activeforeground="red",
                     activebackground="black", command=start)
startbutton.pack(pady=20)




exit_button = Button(window, text="SHOW RESULTS", command=window.destroy,fg='red', font=("Impact"), bg='black', activeforeground="red",
                     activebackground="black")
exit_button.pack()

window.mainloop()
mycon=sqltor.connect(host='localhost',user='root',passwd='sagger345',database='Laptops')

if mycon.is_connected():
    print('successfully connected .to mysql database')

cur=mycon.cursor()

print(company, CPU, raminlap, scrnlap, grplap, price)

sqlcmd="select * from laptop where name like '%{}%' AND CPU like '%{}%' and RAM>='{}%' AND SCREENSIZE>='{}%' AND GRAPICS like '{}%'AND PRICE<'{}' ".format(company, CPU, raminlap, scrnlap, grplap,price)

cur.execute(sqlcmd)

dATA=cur.fetchall()
countnum=len(dATA)
print(countnum)
for t in dATA:
    print(t)
ol = []
for w in dATA:
    ol.append(list(w))
for t in ol:
    if t[4] == 'i .':
        t[4] = 'INTEGRATED'
    else:
        t[4] = 'DEDICATED'

dic1 = {}
dic2 = {}
for k in range(len(ol)):
    dic2 = {'COMPANY': ol[k][0], 'CPU': ol[k][1], 'RAM': ol[k][2], 'SCREEN SIZE': ol[k][3], 'GRAPHICS': ol[k][4],
            'PRICE': ol[k][5]}
    dic1[k] = dic2
t='Displaying',countnum,'results'
resultwindow=Tk()

resultwindow.geometry('1920x1080')
resultwindow.configure(bg='black')


l = Label(resultwindow, text='Results', font=("Impact", 30), bg='black', fg='red')
l.pack()
countlabel=Label(resultwindow,text=t,font=("Impact", 30), bg='black', fg='red')
countlabel.pack()
tframe = Frame(resultwindow, width=1500, height=1500, highlightbackground="black", highlightthickness=1)
tframe.pack_propagate(0)
tframe.pack(fill="both", expand=1)
table=TableCanvas(tframe,data=dic1,read_only=True)
table.show()


resultwindow.mainloop()