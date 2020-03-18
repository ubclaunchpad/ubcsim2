using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class GameController : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LoseMiniGame();

    public int enemiesToSpawn;
    public GameObject enemy;
    public GameObject winlockObject;
    public Transform spawnApex;
    public Transform leftSpawnBound;
    public Transform rightSpawnBound;

    private int enemiesSpawned;
    private float spawnGap = 3.0f;
    private float nextEnemySpawn = 3.0f;
    private bool gameStarted;
    private bool gameEnded;

    // Start is called before the first frame update
    void Start()
    {
        enemiesSpawned = 0;
        gameStarted = false;
        gameEnded = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time >= nextEnemySpawn && enemiesSpawned < enemiesToSpawn)
        {
            nextEnemySpawn += spawnGap;

            float spawnX = Random.Range(leftSpawnBound.transform.position.x, rightSpawnBound.transform.position.x);
            float spawnY = spawnApex.transform.position.y;
            float spawnZ = 0;
            Instantiate(enemy, new Vector3(spawnX, spawnY, spawnZ), spawnApex.transform.rotation);
            enemiesSpawned++;
            gameStarted = true;
        }
        else if (gameStarted && winlockObject != null && enemiesSpawned >= enemiesToSpawn)
        {
            GameObject[] activeEnemies = GameObject.FindGameObjectsWithTag("Enemy");

            if (activeEnemies.Length == 0 && !gameEnded)
            {
                gameEnded = true;
                LoseMiniGame();
            }
        }
    }
}
