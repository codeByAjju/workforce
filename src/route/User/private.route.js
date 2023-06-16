export default function route(){
    return [
        {
            element: <PublicLayout />,
            children: [...publicRoutes()],
          },
          {
            element: <PrivateLayout />,
            children: [...privateRoutes()],
          },
    ]
}